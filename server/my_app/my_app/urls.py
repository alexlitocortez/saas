from django.urls import path
from api.views import register_user
from api.views import nextjs_app


urlpatterns = [
    path('nextjs/', nextjs_app, name='nextjs_app'),
    path('api/register/', register_user, name='register_user')
]