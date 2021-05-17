from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Programmer, Project, Qualification, Experty


class QualificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Qualification
        fields = '__all__'


class ExpertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Experty
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        

class ProgrammerSerializer(serializers.ModelSerializer):
    
    qualifications = serializers.SerializerMethodField(read_only=True)
    expertise = serializers.SerializerMethodField(read_only=True)
    projects = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Programmer
        fields = '__all__'
    
    
    def get_qualifications(self, obj):
        qualifications = obj.qualification_set.all()
        serializer = QualificationSerializer(qualifications, many=True)
        return serializer.data
    
    def get_expertise(self, obj):
        expertise = obj.experty_set.all()
        serializer = ExpertySerializer(expertise, many=True)
        return serializer.data
    
    def get_projects(self, obj):
        projects = obj.project_set.all()
        serializer = ProjectSerializer(projects, many=True)
        return serializer.data

    