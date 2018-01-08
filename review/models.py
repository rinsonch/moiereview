from django.db import models

# Create your models here.

class Genre(models.Model):
    genre=models.CharField(max_length=200)

    def __str__(self):
        return self.genre


class Movies(models.Model):

    CATEGORY_CHOICES = (
        ('Ac', 'Action'),
        ('Ad', 'Adventure'),
        ('Ho','Horror'),
        ('Co','Comedy'),
    )

    title=models.CharField(max_length=200)
    description=models.CharField(max_length=300)
    rating=models.IntegerField(default=3)
    length=models.IntegerField()
    date=models.DateField()
    category=models.ManyToManyField(Genre,blank=True)
    directors=models.CharField(max_length=250)
    writers=models.CharField(max_length=200)
    stars=models.CharField(max_length=200)
    review=models.CharField(max_length=2000)
    image=models.URLField()
    # image=models.ImageField(upload_to='media/')

    def __str__(self):
        return self.title

