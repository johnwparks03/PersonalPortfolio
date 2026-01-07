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
    let sudoku_solver_desc =
      'A PyQt5 desktop application that solves Sudoku puzzles using constraint propagation and backtracking algorithms. Supports standard Sudoku plus variants including Kropki dots (consecutive/ratio relationships) and Killer cages (sum constraints). Features include an intuitive GUI for puzzle creation, visual constraint editing, step-by-step solving visualization, and the ability to load predefined puzzles. The extensible object-oriented architecture makes adding new constraint types straightforward. Showcases algorithm implementation, GUI development, and clean software design.';
    let ai_healthcare_bot_desc =
      'This project was a group project for my Deep Learning. My team and I developed an AI-powered healthcare assistant by fine-tuning the MedAlpaca language model to classify diseases based on patient symptoms. We trained the model on a curated symptom-disease dataset and evaluated its performance on 3,000 test samples, achieving a remarkable 6.6x improvement in accuracy—from 7.8% with the base model to 51.4% after fine-tuning. To make the model accessible, I designed and implemented a web-based user interface using Angular, TypeScript, HTML, and CSS, allowing users to input their symptoms and receive real-time disease predictions. We deployed the fine-tuned model on AWS to ensure reliable, scalable access. This project showcased the practical application of large language models in healthcare and demonstrated my skills in machine learning, cloud deployment, and full-stack web development.';
    let file_genie_desc =
      'I am currently working on building a automatic file organizer that intelligently sorts files into folders using customizable heuristics and rules.';
    let senior_design_desc =
      'For my senior design project I am conducting research with Dr. Boyang Wang to develop a tool that automatically detects hardware vulnerabilities in RTL code.';

    const projectDescriptions: ProjectDescriptionDictionary = {
      'scikit-learn': scikit_desc,
      'CS4033-AI-Principles-Project-2': cs4033_project_2_desc,
      'CS4033-AI-Principles-Project-1': cs4033_project_1_desc,
      eightPuzzleProblem: eight_puzzle_problem_desc,
      'handwritten-digit-recognition': handwritten_digit_recognition_desc,
      Sudoku_Solver: sudoku_solver_desc,
      ai_healthcare_bot: ai_healthcare_bot_desc,
      file_genie: file_genie_desc,
      SeniorDesign: senior_design_desc,
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
      Sudoku_Solver: 'assets/project_images/sudoku_solver.png',
      file_genie: 'assets/project_images/under-construction.jpg',
      ai_healthcare_bot:
        'assets/project_images/deep_learning_project_poster.png',
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
