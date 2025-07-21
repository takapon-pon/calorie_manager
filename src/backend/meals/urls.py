from django.urls import path
from .views import MealListCreateView, UserInfoView

urlpatterns = [
    path('meals/', MealListCreateView.as_view(), name='meal-list'),
    path('user/', UserInfoView.as_view(), name='user-info'),
]