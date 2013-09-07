from django.core.management.base import BaseCommand, CommandError

from primes.models import Prime

from random import seed, randint

from primes import colors

class Command(BaseCommand):
    help = 'Generate a new probably-prime number'

    def handle(self, *args, **options):

        debug = True
    
        is_probably_prime = False
    
        k = 1000
    
        while not is_probably_prime:
            n = 0
            while n % 2 == 0 or n % 5 == 0:
                n = randint(2,100000)
            m = n - 1
            s = 0
            while m % 2**(s + 1) == 0:
                s += 1
            d = m / (2**s)
    
            if debug:
                print "{0} = 2^{1} * {2}".format(m,s,d)
    
            i = 0
            is_not_prime = False
            while i < k and not is_not_prime:
                a = randint(1,m)
    
                y = a**d % n
                if y != 1 and  y != n - 1:
                    j = 1
                    while j < s and y != n - 1:
                        y = y**2 % n
                        if y == 1:
                            is_not_prime = True
                        j += 1
                    if y != n - 1:
                        is_not_prime = True
                i += 1
    
            if not is_not_prime:
                is_probably_prime = True
    
        seed(n)
        newPrime = Prime(value=n, 
                            frontcolor=colors.flat_ui_colors[randint(0, len(colors.flat_ui_colors) - 1)],
                            backcolor=colors.flat_ui_colors[randint(0, len(colors.flat_ui_colors) - 1)]
                )
        newPrime.save()
    
        return


        ## def generate_prime(request):
        ##     
        ##     # List of random numbers
        ## 
        ##     new_prime = -1
        ## 
        ##     while new_prime < 0:
        ##         a = randint(0, 200)
        ##         b = randint(0, 200)
        ##         c = randint(0, 200)
        ##         d = randint(0, 200)
        ##         e = randint(0, 200)
        ##         f = randint(0, 200)
        ##         g = randint(0, 200)
        ##         h = randint(0, 200)
        ##         i = randint(0, 200)
        ##         j = randint(0, 200)
        ##         k = randint(0, 200)
        ##         l = randint(0, 200)
        ##         m = randint(0, 200)
        ##         n = randint(0, 200)
        ##         o = randint(0, 200)
        ##         p = randint(0, 200)
        ##         q = randint(0, 200)
        ##         r = randint(0, 200)
        ##         s = randint(0, 200)
        ##         t = randint(0, 200)
        ##         u = randint(0, 200)
        ##         v = randint(0, 200)
        ##         w = randint(0, 200)
        ##         x = randint(0, 200)
        ##         y = randint(0, 200)
        ##         z = randint(0, 200)
        ##         new_prime = (k + 2)*(1 - (w*z + h + j - q)**2 - ((g*k + 2*g + k + 1)*(h + j) + h - z)**2 - 
        ##                     (2*n + p + q + z - e)**2 - (16*((k + 1)**3)*(k + 2)*(n + 1)**2 + 1 - f**2)**2 -
        ##                     ((e**3)*(e + 2)*(a + 1)**2 + 1 - o**2)**2 - ((a**2 - 1)*y**2 + 1 - x**2)**2 - (16*(r**2)*(y**4)*(a**2 - 1)
        ##                     + 1 - u**2)**2 - (((a + (u**2)*(u**2 - a))**2 - 1)*(n + 4*d*y)**2 + 1 - (x + c*u)**2)**2 - 
        ##                     (n + l + v - y)**2 - ((a**2 - 1)*(l**2) + 1 - m**2)**2 - (a*i + k + 1 - l - i)**2 - 
        ##                     (p + l*(a - n - 1) + b*(2*a*n + 2*a - n**2 - 2*n - 2) - m)**2 - (q + y*(a - p - 1)
        ##                     + s*(2*a*p + 2*a - p**2 - 2*p - 2) - x)**2 - (z + p*l*(a - p) + t*(2*a*p - p**2 - 1) - p*m)**2)
        ## 
        ##     return HttpResponse(new_prime)
