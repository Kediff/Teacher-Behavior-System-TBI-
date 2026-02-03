from django.shortcuts import render
# core/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from .models import Student
from .serializers import StudentSerializer

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password

User = get_user_model()

class StudentLoginAPIView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(email=email, password=password)

        if user:
            serializer = StudentSerializer(user)
            return Response({"success": True, "student": serializer.data})

        return Response(
            {"success": False, "error": "Invalid credentials"},
            status=status.HTTP_401_UNAUTHORIZED
        )
