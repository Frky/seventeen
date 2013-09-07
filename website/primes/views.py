from django.http import HttpResponse

from django.shortcuts import render, redirect

from primes.models import Prime

from datetime import date

def index(request):

    template_name = "primes/index.html"
    context= dict()

    prime_list = Prime.objects.all().order_by('-date')
    context['dprime'] = prime_list[0]
    context['primes'] = prime_list[1:]

    return render(request, template_name, context)


