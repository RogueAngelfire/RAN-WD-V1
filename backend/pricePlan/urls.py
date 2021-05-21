from django.urls import path
from . import views

urlpatterns = [
    path('priceplans/', views.getPricePlans, name="priceplans"),
    path('priceplan/<str:pk>/', views.getPricePlan, name="priceplan"),   
]
