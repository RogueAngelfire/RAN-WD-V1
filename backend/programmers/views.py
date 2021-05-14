from django.shortcuts import render
from django.http import JsonResponse
from .programmers import programmers


def getRoutes(request):
    routes = [
        '/api/programmers/'
    ]
    
    return JsonResponse(routes, safe=False)

def getProgrammers(request):
    return JsonResponse(programmers, safe=False)
