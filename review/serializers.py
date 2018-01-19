from rest_framework import serializers
# from .review import models
from .models import Movies

from django.contrib.auth.models import User, Group
from rest_framework import serializers


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ('id','title', 'description','date', 'rating', 'length','category','directors','writers','stars','review','image')

