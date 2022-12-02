import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrinhoService } from '../carrinho/shared/carrinho.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let carrinhoService: CarrinhoService;
  let saveSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        CarrinhoService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xdescribe('adicionarProduto', () => {
    beforeEach(() => {
      // Given
      saveSpy = spyOn(carrinhoService, 'save');
      saveSpy = spyOn(saveSpy, 'subscribe');
      saveSpy.calls.reset();
    });
    it('should add the items in the shopping cart', () => {
      // When
      component.ngOnInit();

      // Then
      expect(saveSpy()).toHaveBeenCalled();
    });
  });
});
