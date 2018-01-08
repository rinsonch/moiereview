# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0007_movies_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='date',
            field=models.DateTimeField(),
        ),
    ]
