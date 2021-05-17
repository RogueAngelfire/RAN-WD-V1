from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from . models import Programmer
from .serializers import ProgrammerSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/programmers/'
    ]
    
    return Response(routes)


@api_view(['GET'])
def getProgrammers(request):
    programmers = Programmer.objects.all();
    serializer = ProgrammerSerializer(programmers, many=True)
    
    return Response(serializer.data)


@api_view(['GET'])
def getProgrammer(request, pk):
    programmer = Programmer.objects.get(id=pk)
    serializer = ProgrammerSerializer(programmer, many=False)
    return Response(serializer.data)
