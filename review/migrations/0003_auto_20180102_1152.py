# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0002_auto_20180102_1150'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='image',
            field=models.URLField(),
        ),
    ]
