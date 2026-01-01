from django.urls import path
from .views import about_page, loading_page

urlpatterns = [
    path('', loading_page, name='loading'),
    path('insurance/', about_page, name='insurance'),
]