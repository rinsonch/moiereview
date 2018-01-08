# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0008_auto_20180105_0855'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='date',
            field=models.DateField(),
        ),
    ]
