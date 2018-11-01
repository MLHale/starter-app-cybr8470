# @Author: Matthew Hale <mlhale>
# @Date:   2018-09-27T18:23:39-05:00
# @Email:  mlhale@unomaha.edu
# @Filename: serializers.py
# @Last modified by:   mlhale
# @Last modified time: 2018-09-27T18:26:41-05:00
# @Copyright: Copyright (C) 2018 Matthew L. Hale

from rest_framework import serializers
from api.models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'eventtype', 'timestamp', 'requestor')
