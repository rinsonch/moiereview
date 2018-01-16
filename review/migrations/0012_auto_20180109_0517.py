# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0011_auto_20180105_1125'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
