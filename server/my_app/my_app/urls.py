from django.urls import path
from api.views import register_user
from api.views import nextjs_app
from django.contrib import admin



urlpatterns = [
    path('admin/', admin.site.urls),
    path('nextjs/', nextjs_app, name='nextjs_app'),
    path('api/register', register_user, name='register_user')
]