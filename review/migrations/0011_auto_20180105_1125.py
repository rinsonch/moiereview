# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0010_auto_20180105_1025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='description',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='movies',
            name='review',
            field=models.CharField(max_length=2000),
        ),
    ]
