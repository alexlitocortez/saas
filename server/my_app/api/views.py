from django.shortcuts import render

# Create your views here.
def nextjs_app(request):
    return render(request, 'nextjs_app.html')