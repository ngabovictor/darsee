# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-05-06 11:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_auto_20170506_1124'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carousel',
            name='animation',
            field=models.CharField(choices=[('fadeInDown', 'fadeInDown'), ('fadeInLeft', 'fadeInLeft'), ('fadeInUp', 'fadeInUp'), ('fadeInRight', 'fadeInRight')], default='fadeInUp', max_length=100),
        ),
    ]
