from django.db import models


class Prime(models.Model):
    """ 
    Class of a prime number generated

    """

    # Date of generation and publicationi of the prime number
    date = models.DateTimeField('date parution', auto_now=True)
    # Value of the prime number
    value = models.IntegerField(default=17)

    # probability to be prime (in %)
    proba = models.CharField(default="N.C.", max_length=4)
    backcolor = models.CharField(default="#2980b9", max_length=7)
    frontcolor = models.CharField(default="#2980b9", max_length=7)

