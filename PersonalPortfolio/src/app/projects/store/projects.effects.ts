import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProjectsActions from './projects.actions';
import { HttpClient } from '@angular/common/http';
import { EMPTY, catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { ProjectsGithubApiService } from '../services/projects-github-api.service';
import { project } from '../models/project';
import { Store } from '@ngrx/store';

interface ProjectDescriptionDictionary {
  [key: string]: string;
}

interface ProjectImageDictionary {
  [key: string]: string;
}

@Injectable()
export class ProjectsEffects {
  loadRepos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.GetProjects),
      exhaustMap(() => {
        return this.githubProjectsService.getRepos().pipe(
          map((data) =>
            ProjectsActions.GetProjectsSuccess({
              projects: this.convertDataToRepos(data),
            })
          ),
          catchError(async () => ProjectsActions.GetProjectsFailure())
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private githubProjectsService: ProjectsGithubApiService
  ) {}

  convertDataToRepos(data: project[]): project[] {
    let projects: project[] = [];
    let newProject: project;

    let scikit_desc =
      'Contributed to the open-source machine learning library scikit-learn as part of a class project focused on real-world software engineering. Scikit-learn is a widely used Python library that provides tools for classification, regression, clustering, and more. My contributions involved updating error messages to make them consistent with actual behavior and documentation, as well as updating unit tests to reflect those changes. This gave me hands-on experience with collaborative open-source workflows and working within a large, production-level codebase';
    let cs4033_project_2_desc =
      'Implemented probabilistic inference algorithms in Python to track invisible ghosts in a Pacman-style game using Bayes Nets and Hidden Markov Models. This project involved designing exact and approximate inference methods — including variable elimination and particle filtering — to update beliefs about ghost positions based on noisy sensor data. Built as part of an Intro to Artificial Intelligence course to explore core AI principles like probabilistic reasoning and decision-making under uncertainty.';
    let cs4033_project_1_desc =
      'A comprehensive implementation of core reinforcement learning algorithms including value iteration, asynchronous value iteration, prioritized sweeping, and Q-learning with epsilon-greedy exploration. Features both exact and approximate Q-learning agents tested on Gridworld environments, a simulated crawler robot, and Pacman game scenarios. Built with Python using Markov Decision Process (MDP) frameworks for AI agent decision-making and policy optimization.';
    let eight_puzzle_problem_desc =
      'An intelligent solver for the classic 8-puzzle sliding tile game that finds the optimal solution path using A* search with a misplaced tiles heuristic. The implementation uses a priority queue to explore the state space and guarantees finding the shortest sequence of moves to reach the goal state. Features custom node representation, path reconstruction, and step-by-step solution visualization. Built with Python using heap-based priority queues for optimal search performance.';
    let handwritten_digit_recognition_desc =
      'A custom-built neural network from scratch that recognizes handwritten digits (0-9) using the MNIST dataset. The implementation features a 3-layer feedforward network with sigmoid activation, backpropagation training, and interactive digit prediction. Trained on 60,000 handwritten digit samples with real-time accuracy tracking across multiple epochs. Built with Python using NumPy for matrix operations and Matplotlib for visualization, demonstrating core machine learning concepts without high-level frameworks like TensorFlow.';

    const projectDescriptions: ProjectDescriptionDictionary = {
      'scikit-learn': scikit_desc,
      'CS4033-AI-Principles-Project-2': cs4033_project_2_desc,
      'CS4033-AI-Principles-Project-1': cs4033_project_1_desc,
      eightPuzzleProblem: eight_puzzle_problem_desc,
      'handwritten-digit-recognition': handwritten_digit_recognition_desc,
    };

    const projectImages: ProjectImageDictionary = {
      'scikit-learn': 'assets/project_images/scikit-learn.png',
      'CS4033-AI-Principles-Project-2':
        'assets/project_images/cs4033-project-2.png',
      'CS4033-AI-Principles-Project-1':
        'assets/project_images/cs4033-project-1.png',
      eightPuzzleProblem: 'assets/project_images/eight-puzzle-problem.png',
      'handwritten-digit-recognition':
        'assets/project_images/handwritten-digit-recognition.png',
      PersonalPortfolio: 'assets/project_images/personal-portfolio.png',
    };

    data.forEach((project) => {
      newProject = {
        name: this.formatProjectName(project.name),
        description:
          project.name in projectDescriptions
            ? projectDescriptions[project.name]
            : project.description,
        html_url: project.html_url,
        img_file_path:
          project.name in projectImages
            ? projectImages[project.name]
            : 'assets/project_images/default-project.png',
      };
      projects.push(newProject);
    });
    return projects;
  }

  formatProjectName(name: string): string {
    // Replace dashes/underscores with spaces
    name = name.replace(/[-_]/g, ' ');

    // Add space before capital letters that follow lowercase letters or numbers
    name = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Title case each word (unless fully uppercase like CS4033)
    const words = name.split(' ').map((word) => {
      return /^[A-Z0-9]+$/.test(word)
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(' ');
  }
}
