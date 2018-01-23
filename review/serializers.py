from rest_framework import serializers
# from .review import models
from .models import Movies,Genre

from django.contrib.auth.models import User, Group
from rest_framework import serializers


class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movies
        fields = ('id','title', 'description','date', 'rating', 'length','category','directors','writers','stars','review','image')

class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model=Genre
        fields='__all__'

class MovieListSerializer(serializers.HyperlinkedModelSerializer):
    category=GenreSerializer(many=True,read_only=True)

    class Meta:
        model = Movies
        fields = ('url', 'id', 'description', 'title','image','category')