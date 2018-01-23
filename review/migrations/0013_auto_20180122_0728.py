# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0012_auto_20180109_0517'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='category',
            field=models.ManyToManyField(blank=True, related_name='categories', to='review.Genre'),
        ),
    ]
