# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0009_auto_20180105_0924'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='image',
            field=models.URLField(),
        ),
    ]
