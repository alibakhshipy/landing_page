from django.shortcuts import render


def loading_page(request):
    return render(request, 'core/index.html')

def about_page(request):
    return render(request, 'core/about.html')