from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Priceplan
from .serializers import PriceplanSerializer


@api_view(['GET'])
def getPricePlans(request):
    pricePlans = Priceplan.objects.all()
    serializer = PriceplanSerializer(pricePlans, many=True)
    
    return Response(serializer.data)


@api_view(['GET'])
def getPricePlan(request, pk):
    pricePlan = Priceplan.objects.get(id=pk)
    serializer = PriceplanSerializer(pricePlan, many=False)
    return Response(serializer.data)
