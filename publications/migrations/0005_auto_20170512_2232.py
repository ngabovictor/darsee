# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-05-12 22:32
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0004_auto_20170507_2030'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='date',
            field=models.DateField(default=datetime.datetime(2017, 5, 12, 22, 32, 2, 123813)),
        ),
    ]
