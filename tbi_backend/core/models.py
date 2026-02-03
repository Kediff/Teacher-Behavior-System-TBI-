from django.db import models
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, AbstractUser

# Create your models here.

class StudentManager(BaseUserManager):
    def create_user(self, email, student_id, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")
        if not student_id:
            raise ValueError("Student ID is required")

        email = self.normalize_email(email)
        student = self.model(
            email=email,
            student_id=student_id,
            **extra_fields
        )
        student.set_password(password)
        student.save(using=self._db)
        return student
    

    def create_superuser(self, email, student_id, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(email, student_id, password, **extra_fields)



class Student(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    student_id = models.CharField(max_length=20, unique=True)

    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField(max_length=150, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = StudentManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["student_id"]

    def __str__(self):
        return f"{self.student_id} - {self.email}"


class Teacher(models.Model):
    full_name = models.CharField(max_length=255)
    department = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name


class Evaluation(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    submitted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('student', 'teacher')

    def __str__(self):
        return f"{self.student} → {self.teacher}"



class EvaluationAnswer(models.Model):
    evaluation = models.ForeignKey(Evaluation, on_delete=models.CASCADE, related_name="answers")
    question = models.CharField(max_length=255)
    rating = models.IntegerField()

    def __str__(self):
        return f"{self.question}: {self.rating}"
