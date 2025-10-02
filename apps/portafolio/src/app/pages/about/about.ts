import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ← Faltaba esta línea

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  activeTab: 'resumen' | 'experiencia' | 'habilidades' | 'credenciales' =
    'resumen';

  constructor(private router: Router) {}

  setActiveTab(
    tab: 'resumen' | 'experiencia' | 'habilidades' | 'credenciales'
  ): void {
    this.activeTab = tab;
  }

  navigateToHome(): void {
    this.router.navigate(['/inicio']);
  }

  experience = [
    {
      role: 'Líder de Desarrollo',
      company: 'Epica',
      location: 'Ciudad de México',
      period: 'Enero 2023 - Presente',
      achievements: [
        'Lideré equipo de 7 desarrolladores en migración legacy a microservicios',
        'Implementé prácticas ágiles (Scrum) asegurando entregas de calidad',
        'Fortalecí calidad del código con SonarQube y auditorías automatizadas',
      ],
    },
    {
      role: 'Líder de Proyecto',
      company: 'Clade Ajustadores',
      location: 'Ciudad de México',
      period: 'Mayo 2021 - Diciembre 2022',
      achievements: [
        'Diseñé y gestioné API en .NET Core 3.1 con autenticación de doble factor',
        'Administré base de datos en Azure SQL con foco en rendimiento',
        'Desarrollé interfaces en Blazor, reforzando experiencia en C# y Razor',
      ],
    },
    {
      role: 'Desarrollador Frontend',
      company: 'Finasist',
      location: 'Ciudad de México',
      period: '2017 - 2021',
      achievements: [
        'Desarrollo de componentes en Angular 4, optimización de UI',
        'Implementación de Bootstrap para interfaces responsivas',
        'Integración de funciones cliente-servidor reduciendo carga en backend',
      ],
    },
  ];

  skills = {
    frontend: [
      'React',
      'React Native',
      'Angular',
      'Blazor',
      'TypeScript',
      'JavaScript',
    ],
    backend: ['C#', '.NET Core', 'ASP.NET MVC', 'Entity Framework', 'LINQ'],
    databases: ['SQL Server', 'Azure SQL', 'PostgreSQL', 'Firebase'],
    tools: ['GitHub', 'Azure DevOps', 'Jira', 'SonarQube', 'Docker'],
    methodologies: ['Scrum', 'Kanban', 'Clean Code', 'CI/CD'],
  };

  education = [
    {
      degree: 'Maestría en Desarrollo de Software',
      institution: 'Instituto Tecnológico Superior de Poza Rica',
      year: '2018',
    },
    {
      degree: 'Ingeniería en Sistemas Computacionales',
      institution: 'Instituto Tecnológico Superior de Poza Rica',
      year: '2015',
    },
  ];

  certifications = [
    {
      name: 'Scrum Fundamentals Certified (SFC)',
      issuer: 'ScrumStudy',
      icon: '◆',
    },
    {
      name: 'Habilidades de Productividad con IA Generativa',
      issuer: 'Microsoft',
      icon: '◆',
    },
  ];
}
