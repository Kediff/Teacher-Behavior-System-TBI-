from django.contrib import admin
from .models import Student, Teacher, Evaluation, EvaluationAnswer
# Register your models here.

admin.site.register(Student)
admin.site.register(Teacher)
admin.site.register(Evaluation)
admin.site.register(EvaluationAnswer)
