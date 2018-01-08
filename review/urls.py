from django.conf.urls import url
from review import views
from django.views.generic import TemplateView
# from rest_framework import routers
from rest_framework import routers
from .views import Index
from moviereview import settings
router = routers.DefaultRouter()
router.register(r'review', views.MovieViewSet)


app_name='review'

urlpatterns = [
    url(r'^$',Index.as_view(),name='index'),

        ]

# urlpatterns += ('',
#         (r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),
#     )

