import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionListComponent } from './selection-list.component';
import {Component } from '@angular/core';
import {SelectionListConfig} from '../public-api';

interface TestElement {
  id: number;
  title: string;
  subtitle: string;
  comment: string;
}

const testElement1 = {
  id: 500,
  title: 'Test1',
  subtitle: 'first',
  comment: ''
} as TestElement;


const testElement2 = {
  id: 440,
  title: 'Test2',
  subtitle: 'second',
  comment: 'second element'
} as TestElement;


const testElement3 = {
  id: 1,
  title: 'Test3',
  subtitle: 'third',
  comment: 'third element'
} as TestElement;

class TestConfig implements SelectionListConfig {
  hoverColor = 'grey';
  selectionColor = 'green';

  innerHtml(v: TestElement): string {
    return `<strong>${v.title}</strong><br>${v.id}`;
  }

  selectedPredicate(element: TestElement, currentSelection: TestElement): boolean {
    return element.id === currentSelection?.id;
  }
}

@Component({
  template: '<inw-selection-list ' +
    '[listData]=data ' +
    '[selectedElement]=selectedElement ' +
    '(selectionChanged)=onSelection($event)>' +
    '</inw-selection-list>'
})
class TestHostComponent {
  data: TestElement[];
  selectedElement: TestElement;
  publishedElement: TestElement;
  connectEventToSelection = false;

  onSelection($event: TestElement): void {
    this.publishedElement = $event;
    if (this.connectEventToSelection) {
      this.selectedElement = $event;
    }
  }
}

describe('SelectionListComponent', () => {
  describe('Unit Test', () => {
    let component: SelectionListComponent;
    let fixture: ComponentFixture<SelectionListComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ SelectionListComponent ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(SelectionListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Should create component', () => {
      expect(component).toBeDefined();
    });
  });

  describe('Integration Test', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    const expectedElements = [testElement1, testElement2, testElement3];
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ SelectionListComponent, TestHostComponent ],
        providers: [{ provide: 'SelectionListConfig', useClass: TestConfig }]
      })
        .compileComponents();
      fixture = TestBed.createComponent(TestHostComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

    it('Should create component', () => {
      expect(component).toBeDefined();
    });

    it('Should initialize component', () => {
      component.data = expectedElements;
      fixture.detectChanges();
      const listEntries = fixture.nativeElement.querySelectorAll('li') as HTMLUListElement[];
      expect(listEntries).toHaveLength(expectedElements.length);
      listEntries.forEach((e, idx) =>
        expect(e.innerHTML)
          .toEqual(`<strong>${expectedElements[idx].title}</strong><br>${expectedElements[idx].id}`)
      );
    });

    it('Should publish element on selection', () => {
      component.data = expectedElements;
      fixture.detectChanges();
      const listEntries = fixture.nativeElement.querySelectorAll('li') as HTMLUListElement[];

      listEntries[1].click();
      fixture.detectChanges();

      expect(component.publishedElement).toEqual(expectedElements[1]);

      listEntries[0].click();
      fixture.detectChanges();

      expect(component.publishedElement).toEqual(expectedElements[0]);
    });

    it('Should mark selected element', () => {
      component.data = expectedElements;
      fixture.detectChanges();
      expect(component.selectedElement).not.toBeDefined();
      expect(fixture.nativeElement.querySelectorAll('.active')).toHaveLength(0);

      component.selectedElement = expectedElements[2];
      fixture.detectChanges();

      const listEntries = fixture.nativeElement.querySelectorAll('li');
      const activeElements = fixture.nativeElement.querySelectorAll('.active');

      expect(activeElements.length).toEqual(1);
      expect(listEntries[2].classList).toContain('active');
    });


    it('Should not mark entry as active when outer component does not put it', () => {
      component.data = expectedElements;
      fixture.detectChanges();
      expect(component.selectedElement).not.toBeDefined();
      expect(fixture.nativeElement.querySelectorAll('.active')).toHaveLength(0);

      const listEntries = fixture.nativeElement.querySelectorAll('li') as HTMLUListElement[];
      listEntries[2].click();
      fixture.detectChanges();

      const activeElements = fixture.nativeElement.querySelectorAll('.active');
      expect(activeElements.length).toEqual(0);
    });

    it('Should mark entry as active when outer component puts it after click', () => {
      component.data = expectedElements;
      component.connectEventToSelection = true;
      fixture.detectChanges();
      expect(component.selectedElement).not.toBeDefined();
      expect(fixture.nativeElement.querySelectorAll('.active')).toHaveLength(0);

      const listEntries = fixture.nativeElement.querySelectorAll('li') as HTMLUListElement[];
      listEntries[2].click();
      fixture.detectChanges();

      const activeElements = fixture.nativeElement.querySelectorAll('.active');
      expect(activeElements.length).toEqual(1);
      expect(listEntries[2].classList).toContain('active');
    });
  });
});
