# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0006_auto_20180102_1205'),
    ]

    operations = [
        migrations.AddField(
            model_name='movies',
            name='date',
            field=models.DateField(default=datetime.datetime(2018, 1, 5, 8, 14, 39, 778595, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
