from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Priceplan


class PriceplanSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Priceplan
        fields = '__all__'
