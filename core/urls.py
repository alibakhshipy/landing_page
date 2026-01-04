from django.urls import path
from . import views

urlpatterns = [
    path('', views.loading_page, name='loading'),
    path('allameh/', views.allameh_insurance, name='allameh_insurance'),
]