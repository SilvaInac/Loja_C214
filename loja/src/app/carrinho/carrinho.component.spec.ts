import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { O_TRUNC } from 'constants';

import { CarrinhoComponent } from './carrinho.component';
import { CarrinhoService } from './shared/carrinho.service';
import { Tenis } from './shared/tenis';

describe('CarrinhoComponent', () => {
  let component: CarrinhoComponent;
  let fixture: ComponentFixture<CarrinhoComponent>;
  let carrinhoService: CarrinhoService;
  let deleteSpy: any;
  let getAllSpy: any;
  let getAllSpy2: any;

  const sneakerMock: Tenis = {
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

  xdescribe('ngOnInit', () => {
    beforeEach(() => {
      // Given
      getAllSpy = spyOn(carrinhoService, 'getAll');
      getAllSpy2 = spyOn(getAllSpy, 'subscribe');
      getAllSpy2.calls.reset();
    });
    it('should get the items on the shopping cart', () => {
      // When
      component.ngOnInit();

      // Then
      expect(getAllSpy2()).toHaveBeenCalled();
    });
  });
  xdescribe('removerProduto', () => {
    beforeEach(() => {
      // Given
      deleteSpy = spyOn(carrinhoService, 'delete');
      deleteSpy.calls.reset();
    });

    it('should remove the sneaker from the list', () => {
      // When
      component.removerProduto(sneakerMock);

      // Then
      expect(deleteSpy(sneakerMock._id).subscribe()).toHaveBeenCalled();
    });

  });

});
