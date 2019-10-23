import { Component, OnInit } from '@angular/core';
import * as data from './../../shared/constant-files/constants'
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  testSeriesForm: FormGroup
  testDetails: any[] = [];
  selectedTest: any;
  selectedQuestion: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.testDetails = data.testQuestions;
  }

  onTestSelected(test) {
    this.selectedQuestion = '';
    this.selectedTest = test
    this.generateTestDetailsForm();
  }

  onTestQuestionSelected(testQuestion) {
    this.selectedQuestion = testQuestion;
  }

  onPreviousQuestionClicked() {

  }

  createForm() {
    this.testSeriesForm = this.fb.group({
      testName: [''],
      testId: [''],
      test: this.fb.array([])
    })

    console.log(this.testSeriesForm.value);
  }

  createQuestionForm() {
    return this.fb.group({
      id: [''],
      testId: [''],
      questionId: [''],
      correctAnswer: [''],
      question: [''],
      answer: this.fb.array([])
    })
  }

  createAnswerForm() {
    return this.fb.group({
      answerId: [''],
      answer: ['']
    })
  }

  generateTestDetailsForm() {
    this.testSeriesForm.patchValue(this.selectedTest);
    this.selectedTest.test.forEach((test, testIndex) => {
      (<FormArray>(this.testSeriesForm.get('test'))).push(this.createQuestionForm());
      (<FormArray>this.testSeriesForm.controls['test']).at(testIndex).patchValue({
        id: test.id,
        testId: test.testId,
        questionId: test.questionId,
        correctAnswer: test.correctAnswer,
        question: test.question
      })
      test.answer.forEach((answer, answerIndex) => {
        (<FormArray>(<FormArray>this.testSeriesForm.controls['test']).at(testIndex).get('answer')).push(this.createAnswerForm());
        (<FormArray>(<FormArray>this.testSeriesForm.controls['test']).at(testIndex).get('answer')).at(answerIndex).patchValue({
          answerId: answer.answerId,
          answer: answer.answer
        })
      })
    })
    console.log(this.testSeriesForm.value);
  }

}
