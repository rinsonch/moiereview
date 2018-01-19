from rest_framework import viewsets
from .serializers import MovieSerializer
from .models import Movies
from django.views.generic import ListView
import datetime
import json
import calendar
from django.http import HttpResponse
from django.core.mail import EmailMessage




class MovieViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = Movies.objects.all()
    serializer_class = MovieSerializer


class Index(ListView):
    template_name = 'index.html'
    model = Movies
    context_object_name = 'movie'

    def get_queryset(self):
        movie=Movies.objects.all().order_by('date')[0:6]
        return movie


    def get_context_data(self, *args, **kwargs):
       context = super(Index, self).get_context_data(*args, **kwargs)
       context['moreItems'] = Movies.objects.order_by('-date')[0:6]
       month=str(datetime.datetime.now().month)
       day=str(datetime.datetime.now().day)
       year=str(datetime.datetime.now().year)
       s = year+"-"+month+"-"+day
       datee = datetime.datetime.strptime( s, "%Y-%m-%d")
       now=calendar.month_name[datetime.datetime.now().month]
       context['nowmonthname']=now
       today = datetime.datetime.now()
       first = today.replace(day=1)
       lastMonth = first - datetime.timedelta(days=1)
       a=lastMonth.month
       context['prevmonthname']=calendar.month_name[a]
       second=lastMonth.replace(day=1)
       prevprevmonth=second-datetime.timedelta(days=1)
       context['prevprevmonthname']=calendar.month_name[prevprevmonth.month]
       startdate = first
       enddate = startdate + datetime.timedelta(days=30)
       # to get the current month's movie reviews
       context['current']=Movies.objects.filter(date__range=[startdate,enddate]).order_by('date')[:3]
       prevstartdate=second
       prevenddate=lastMonth
        # to get the previous month's movie reviews
       context['prevmonth']=Movies.objects.filter(date__range=[prevstartdate,prevenddate]).order_by('date')[:3]
       prevprevenddate=prevprevmonth
       prevprevstartdate=prevprevenddate.replace(day=1)
        # to get the second last month's movie reviews
       context['prevprevmonth']=Movies.objects.filter(date__range=[prevprevstartdate,prevprevenddate]).order_by('date')[:3]
       context['recentreview']=Movies.objects.order_by('-date')[0:3]
       return context


def sendmail(request):
    mail=request.GET.get("email")
    if(request.GET.get("website")):
        website=request.GET.get("website")
    else:
        website=" "
    message=request.GET.get("message")
    name=request.GET.get("name")
    body="Mail:"+mail+"\n"+"Website:"+website+"\n"+"Message:"+message
    email = EmailMessage("Contacted by "+name, body, to=['moviereviewrin@gmail.com'])
    email.send()
    return HttpResponse("The team will contact you shortly")

def obtainids(request):
    movieids=Movies.objects.values_list('id', flat=True)
    json_string = json.dumps([ob for ob in movieids])
    return HttpResponse(json_string)


def sortbycategory(request):
    category=request.GET.get("category")
    year=request.GET.get("year")
    if(category!= 'select' and year== 'year'):
        movieids=Movies.objects.filter(category=category).values_list('id',flat=True)
        json_string = json.dumps([ob for ob in movieids])
        return HttpResponse(json_string)
    else:
        movieids=Movies.objects.values_list('id', flat=True)
        json_string = json.dumps([ob for ob in movieids])
        return HttpResponse(json_string)

def sortbyyear(request):
    category=request.GET.get("category")
    year=request.GET.get("year")
    print("year is ",year)
    if(category=='select'):
        if(year=='year'):
            movieids=Movies.objects.values_list('id', flat=True)
            json_string = json.dumps([ob for ob in movieids])
            return HttpResponse(json_string)
        else:
            movieids=Movies.objects.filter(date__year=year).values_list('id',flat=True)
            json_string = json.dumps([ob for ob in movieids])
            return HttpResponse(json_string)
    else:
        if(category!='select' and year!='year'):
            movieids=Movies.objects.filter(date__year=year).filter(category=category).values_list('id',flat=True)
            print("movieids",movieids)
            json_string = json.dumps([ob for ob in movieids])
            return HttpResponse(json_string)
        else:
            movieids=Movies.objects.filter(category=category).values_list('id', flat=True)
            json_string = json.dumps([ob for ob in movieids])
            return HttpResponse(json_string)




