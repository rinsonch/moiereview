# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('genre', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Movies',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('title', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=200)),
                ('rating', models.IntegerField(default=3)),
                ('length', models.IntegerField(max_length=200)),
                ('directors', models.CharField(max_length=150)),
                ('writers', models.CharField(max_length=200)),
                ('stars', models.CharField(max_length=200)),
                ('review', models.CharField(max_length=2000)),
                ('image', models.URLField()),
                ('category', models.ManyToManyField(blank=True, to='review.Genre')),
            ],
        ),
    ]
