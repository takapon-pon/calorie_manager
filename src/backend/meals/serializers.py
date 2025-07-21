from rest_framework import serializers
from .models import Meal

class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ['id', 'name', 'calories', 'created_at', 'user']
        read_only_fields = ['id', 'created_at', 'user'] 