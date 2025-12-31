from django.urls import path
from .views import about_page, loading_page

urlpatterns = [
    path('', loading_page, name='loading'),
    path('about/', about_page, name='about'),
]