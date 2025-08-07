from django.urls import path
from . import views

urlpatterns = [
    path('modalidade/', views.ModalidadeList.as_view(), name='modalidade-list'),
    path('modalidade/<int:pk>/', views.ModalidadeDetail.as_view(), name='modalidade-detail'),
    path('aluno/', views.AlunoList.as_view(), name='aluno-list'),
    path('aluno/<int:pk>/', views.AlunoDetail.as_view(), name='aluno-detail'),
]