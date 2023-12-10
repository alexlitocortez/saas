from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User 
from django.contrib.auth import authenticate, login 

# Create your views here.
def nextjs_app(request):
    return render(request, 'nextjs_app.html')

def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': 'Username and password are requred.'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Check if the username is already taken
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username is already taken.'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Create a new user
    user = User.objects.create_user(username=username, password=password)

    # Log in the user (optional)
    user = authenticate(request, username=username, password=password)
    login(request, user)

    return Response({'Success': 'User registered successfully.'}, status=status.HTTP_201_CREATED)