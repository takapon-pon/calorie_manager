from rest_framework import generics
from .models import Meal
from .serializers import MealSerializer

class MealListCreateView(generics.ListCreateAPIView):
    queryset = Meal.objects.all().order_by('-created_at')
    serializer_class = MealSerializer