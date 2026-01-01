from django.http import HttpResponse
from django.shortcuts import render


def loading_page(request):
    # return render(request, 'core/index.html')
    return HttpResponse("test ok")

def about_page(request):
    return render(request, 'core/about.html')