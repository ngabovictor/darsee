# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-05-12 22:35
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0008_auto_20170512_2232'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='date',
            field=models.DateField(default=datetime.datetime(2017, 5, 12, 22, 35, 50, 424079)),
        ),
    ]
