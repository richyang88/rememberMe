# Generated by Django 2.1.11 on 2019-10-11 19:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rememberMeApp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='username',
            new_name='userName',
        ),
        migrations.RemoveField(
            model_name='user',
            name='email',
        ),
    ]
