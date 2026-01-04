from django.shortcuts import render


def loading_page(request):
    return render(request, 'core/index.html')

def allameh_insurance(request):
    return render(request, 'core/allameh.html')

