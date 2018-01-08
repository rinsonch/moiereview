# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0005_auto_20180102_1200'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='directors',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='movies',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]
