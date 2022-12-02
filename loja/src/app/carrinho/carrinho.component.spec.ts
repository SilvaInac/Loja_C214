import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { O_TRUNC } from 'constants';

import { CarrinhoComponent } from './carrinho.component';
import { CarrinhoService } from './shared/carrinho.service';

describe('CarrinhoComponent', () => {
  let component: CarrinhoComponent;
  let fixture: ComponentFixture<CarrinhoComponent>;
  let carrinhoService: CarrinhoService;
  let deleteSpy: any;
  let getByCartSpy: any;

  const sneakerMock = {
    _id: '123',
    name: 'Adidas SuperStar',
    price: '350.00'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrinhoComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        CarrinhoService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoComponent);
    component = fixture.componentInstance;
    carrinhoService = TestBed.inject(CarrinhoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      // Given
      getByCartSpy = spyOn(carrinhoService, 'getByCart').and.stub();
      getByCartSpy.calls.reset();
    });
    it('should get the items on the shopping cart', () => {
      // When
      component.ngOnInit();

      // Then
      getByCartSpy.subscribe(() => {
        // expect(get)
      });
    });
  });

  describe('removerProduto', () => {
    beforeEach(() => {
      // Given
      deleteSpy = spyOn(carrinhoService, 'delete');
      deleteSpy.calls.reset();
    });

    it('should remove the sneaker from the list', () => {
      // When
      component.removerProduto(sneakerMock._id);

      // Then
      expect(deleteSpy).toHaveBeenCalledWith(sneakerMock._id);
    });
  });
});
