from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User 
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from django.http import JsonResponse
import json

# Create your views here.
def nextjs_app(request):
    return render(request, 'nextjs_app.html')

@csrf_exempt 
def register_user(request):
    data = json.loads(request.body)
    # username = request.POST.get('username')
    # password = request.POST.get('password')

    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return JsonResponse({'error': 'Username and password are requred.'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Check if the username is already taken
    if User.objects.filter(username=username).exists():
        return JsonResponse({'error': 'Username is already taken.'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Create a new user
    user = User.objects.create_user(username=username, password=password)

    # Log in the user (optional)
    user = authenticate(request, username=username, password=password)
    login(request, user)

    data = {'Success': 'User registered successfully.'}
    return JsonResponse(data, status=status.HTTP_201_CREATED)



